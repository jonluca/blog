#!/usr/bin/env python3
import os
from pathlib import Path
from threading import Thread
from queue import Queue
import subprocess

files = []
for filename in Path('_site').glob('**/*'):
	filename = str(filename)
	if not filename.endswith('br') and not filename.endswith('gz') and '.' in filename:
		files.append(filename)
class Worker(Thread):
  """ Thread executing tasks from a given tasks queue """

  def __init__(self, tasks):
    Thread.__init__(self)
    self.tasks = tasks
    self.daemon = True
    self.start()

  def run(self):
    while True:
      func, args, kargs = self.tasks.get()
      try:
        func(*args, **kargs)
      except Exception as e:
        # An exception happened in this thread
        print(e)
      finally:
        # Mark this task as done, whether an exception happened or not
        self.tasks.task_done()


class ThreadPool:
  """ Pool of threads consuming tasks from a queue """

  def __init__(self, num_threads):
    self.tasks = Queue(num_threads)
    for _ in range(num_threads):
      Worker(self.tasks)

  def add_task(self, func, *args, **kargs):
    """ Add a task to the queue """
    self.tasks.put((func, args, kargs))

  def map(self, func, args_list):
    """ Add a list of tasks to the queue """
    for args in args_list:
      self.add_task(func, args)

  def wait_completion(self):
    """ Wait for completion of all the tasks in the queue """
    self.tasks.join()

def compress_file(filename):
	command = 'zopfli ' + filename
	process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
	process.wait()
	print(filename + ' ' + str(process.returncode) + ' done')

pool = ThreadPool(5)
pool.map(compress_file, files)
pool.wait_completion()
print(len(files))
