---
title: "How the Nintendo Switch prevents downgrades by irreparably blowing its own fuses"
date: 2020-06-14 13:36:09 -0700
header-img: "/images/switch.png"
---

Note: this is a republish of the article I originally wrote on Medium for [Hackernoon](https://medium.com/hackernoon/how-the-nintendo-switch-prevents-downgrades-by-irreparably-blowing-its-own-fuses-884bd3b7a8ba)

Downgrade prevention has been a cat-and-mouse game between consumers and companies since the inception of remote updates. The Nintendo Switch adopts a worrisome-strategy of preventing firmware downgrades by permanently modifying your device every time it updates. While this isn’t a new concept (the Xbox 360 was doing it back in 2007), it is part of a greater effort to prevent end users from modifying their devices to their liking.

The Nintendo Switch use an [Nvidia Tegra X1 SoC](https://en.wikipedia.org/wiki/Tegra#Tegra_X1), which comes with a fuse driver. This allows it to programmatically blow fuses — permanently modifying the device, making it impossible to revert to a previous state.

{% include image.html file="switch" alt="Nintendo Switch" %}


## How It Works

The boot loader verifies a specific fuse, [FUSE_RESERVED_ODM7](http://switchbrew.org/index.php?title=Fuses#FUSE_RESERVED_ODM7), to prevent downgrading.[^1] Each software version expects a different number of fuses to be blown — if more than is expected, it fails to boot, and if less, it’ll blow those fuses and then proceed to boot. Blowing a fuse is irreversible— once it’s been set it can never be undone. It’s theoretically possible to physically modify the SoC and replace the fuses, but it’s so prohibitively invasive and expensive that it’s not a real option.

There are 256 bits in the set of ODM_RESERVED fuses, and there are 8 ODM_RESERVED. This allows for 32 fuses, or 32 future FW versions (provided they burn a fuse on every major release).

<script src="https://gist.github.com/jonluca/0d7ce7da7c84de5163be0b49b3e319cc.js"></script>

## Workarounds
        
In April 2018, the [first serious exploit of the Switch BootROM was released](https://arstechnica.com/gaming/2018/04/the-unpatchable-exploit-that-makes-every-current-nintendo-switch-hackable/). This is not a remotely patchable exploit, which means that all ~15 million devices currently out are vulnerable and will continue to be vulnerable for their lifespans. [fail0verflow also released a Linux side loader](https://github.com/fail0verflow/shofel2).

## 2020 Update

Since this article was originally written (in 2018), the ability to bypass the fuse checks have come out. By setting your console to [RCM mode](https://switch.homebrew.guide/usingcfw/manualchoiupgrade.html), it allows you to bypass all these checks before the console has already booted. There are patched and unpatched versions of these Switches, which are outlined on the very useful [NH Switch Guide](https://nh-server.github.io/switch-guide/) site. 


## What firmware versions are currently hackable?

From the [FAQ on NH-Server](https://nh-server.github.io/switch-guide/faq/): 

> Currently two hardware revisions of the Switch exist. Any Switch bought or manufactured before the middle of 2018 has a bootrom bug that allows us to run code regardless of the firmware version on the Switch. When Nintendo updates the system, however, CFW will usually need an update to account for it. This bug cannot be fixed by Nintendo once the console leaves the factory, unless the console is sent in for repairs. This means that all current and future firmwares will be able to launch CFW through this exploit on the old hardware revision.

> Any console purchased after approximately August 2018 is likely to be patched. This includes the latest units on shelves, referred to as 'red box' or 'Mariko'. Mariko is hardware patched, but may come on a vulnerable firmware. Currently the only way to know if your Switch is hackable is by trying to send the payload in RCM. Even with this exploit fixed, many Switches on 8.0.1 and below will be hackable to some degree in the future (see Should I update my Firmware? for much more detailed information). The serial number on the back of the box can possibly tell you which consoles are patched and which aren't. See here for an up to date list.

###### Footnotes

[^1]: [http://switchbrew.org/index.php?title=Fuses#Anti-downgrade](http://switchbrew.org/index.php?title=Fuses#Anti-downgrade)