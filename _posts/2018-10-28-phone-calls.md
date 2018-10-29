---
title: "Phone calls, signal processing, and audio formats"
date: 2018-10-28 18:17:38 -0700
header-img: "/images/electron-hls.png"
---
<link rel="stylesheet" href="/stylesheets/main.css"/>

A while back I was wondering what made phone calls sound so distinct - a call over a landline, through copper cables, always sound very similar. They are tin-y, hollow, and the person you're talking to sounds far away. The newer VoIP and VoLTE calls sound *so* much better, so I assumed that it must have to do with either A) the compression being done to the call or B) a native property of copper itself. I've never done any signal processing, and am wholly unfamiliar with the process, so my initial assumptions were somewhat misguided, but it still proved to be an interesting point of entry to the field.

I found an interesting python library called [librosa](https://librosa.github.io/librosa/index.html) for audio analysis. It also uses numpy behind the scenes, which makes a lot of the typical math functions I'm used to available immediately.

The first step was to find out what phone calls were currently using. I ran across the [Adaptive Multi Rate audio codec](https://en.wikipedia.org/wiki/Adaptive_Multi-Rate_audio_codec). From Wikipedia - 

> The Adaptive Multi-Rate (AMR, AMR-NB or GSM-AMR) audio codec is an audio compression format optimized for speech coding. AMR speech codec consists of a multi-rate narrowband speech codec that encodes narrowband (200–3400 Hz) signals at variable bit rates ranging from 4.75 to 12.2 kbit/s with toll quality speech starting at 7.4 kbit/s.

This was promising. Some of the core features of AMR are:

* Sampling frequency 8 kHz/13-bit (160 samples for 20 ms frames), filtered to 200–3400 Hz.
* The AMR codec uses eight source codecs with bit-rates of 12.2, 10.2, 7.95, 7.40, 6.70, 5.90, 5.15 and 4.75 kbit/s.

There are some more advanced properties, such as the compression during silent periods of the call and how it handles both speech parameters and a waveform signal, but I didn't want to get into that yet

First I just wanted to see if I could emulate the sound of a phone call from a high quality audio file. I found a site that has [high fidelity audio sampled at 44khz](https://sampleswap.org/filebrowser-new.php?d=VOCALS+and+SPOKEN+WORD%2FSPOKEN+WORD%2F) and tried it on one of them. 

The original sound file: 

<audio controls class="audio-block">
  <source src="/assets/game.wav" type="audio/wav">
  <p>Your browser doesn't support HTML5 audio. Here is
     a <a href="https://github.com/jonluca/Phone-Audio-Processing/tree/master/input">link to the audio</a> instead.</p>
</audio>

The first step is to see how it sounds like resampled - let's go from `44khz` to `8khz`.

```python
EIGHT_KHZ = 8096

filename = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'input/game.wav')

time_series, sample_rate = librosa.load(filename, sr=None)

# resample at 8khz
resampled_time_series = librosa.core.resample(y=time_series, orig_sr=sample_rate, target_sr=EIGHT_KHZ)
librosa.output.write_wav("output/eightkhz_resampled.wav", resampled_time_series, EIGHT_KHZ)
```

You can listen to the resample result here:

<audio controls class="audio-block">
  <source src="/assets/eightkhz_resampled.wav" type="audio/wav">
  <p>Your browser doesn't support HTML5 audio. Here is
     a <a href="https://github.com/jonluca/Phone-Audio-Processing/tree/master/output">link to the audio</a> instead.</p>
</audio>

It already sounds fairly tin-y. Minimizing the sample rate has a huge effect on the audio. It still sounds a *little* too good though - you can make out background noises, and the frequencies are still distinct.

We can use a [Short Time Fourier Transform](https://en.wikipedia.org/wiki/Short-time_Fourier_transform) to "bin" the resampled audio into its respective frequencies. Then we can just zero out the frequencies mentioned in AMR - 0 through 200 and 3400 onwards. 

```python
SPEECH_LOW_BAND = 200
SPEECH_UPPER_BAND = 3400

short_time_fourier_transform = librosa.core.stft(y=resampled_time_series)

# Clear out speech bands
# TODO(jonluca) is there a better way of doing this? Feels hacky 
short_time_fourier_transform[:SPEECH_LOW_BAND] = 0
short_time_fourier_transform[SPEECH_UPPER_BAND: len(short_time_fourier_transform)] = 0

reconstructed_time_series = librosa.core.istft(short_time_fourier_transform)
librosa.output.write_wav("output/eightkhz_resampled_unfrequencied.wav", reconstructed_time_series, EIGHT_KHZ)
```

Then we use the inverse short time fourier transform to get back the modified time series, and write that out. The final audio result is below.

<audio controls class="audio-block">
  <source src="/assets/eightkhz_resampled_unfrequencied.wav" type="audio/wav">
  <p>Your browser doesn't support HTML5 audio. Here is
     a <a href="https://github.com/jonluca/Phone-Audio-Processing/tree/master/output">link to the audio</a> instead.</p>
</audio>

This sounds almost *exactly* like a phone call. This was a suprisingly quick and fun exploration into signal processing, and into making high quality audio sound like a phone call. 

I want to play around with implementing Linear predictive coding (LPC) to synthesize the speech from a residual waveform. There are a few signal processing books on my reading list, and I'll update this blog post with any corrections or fun discoveries as I get through those.

The code for this project lives [here](https://github.com/jonluca/Phone-Audio-Processing)