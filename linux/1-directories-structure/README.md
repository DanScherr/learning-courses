# :student: Linux Studies :penguin:
* This folder contains the studies of **directories structures** of linux (general).

***

| |  |  |  |
| - | :-: | - | :-: |
| [/](#1) | [/bin/](#1bin2) | [/etc](#1etc2) | [/home](#1home2) |
| [/opt](#1opt2) | [/tmp/](#1tmp2) | [/usr/](#1usr2) | [/var/](#1var2) |
| [/boot/](#1boot2) | [/cdrom/](#1cdrom2) | [/cgroup/](#1cgroup2) | [/dev/](#1dev2) |
| [/export/](#1export2) | [/lib/](#1lib2) | [/lib64/](#1lib642) | [/lost+found/](#1lostfound2) |
| [/lib/](#1lib2) | [/mnt/](#1mnt2) | [/proc/](#1proc2) | [/root/](#1root2) |
| [/selinux/](#1selinux2) | [/srv/](#1srv2) | [/sys/](#1sys2) | [go back.](../) |


***

* ## / :
> **Root.**
> The top of the file systema hierarchy.

* ## /bin/ :
> **Binaries** (0's and 1's) and other
>**executable programs** (source code -> human readible text).

* ## /etc/ :
> **System configuration** files. <br>- Controls how the OS and applications behave. <br>- Ex: flash file tells either to boot on text or interface mode.

* ## /home/ : 
> **Home directories**.
<br> /home/%user%/
<br>- Where you can separete your data from anothers accounts data.

* ## /opt/ :
> **Optional or third party software**.
<br>- Not bundled with the operating system.

* ## /tmp/ :
> **Temporary space**.
<br>- Typically cleared on reboot.
<br>- Greate to store temporary files.

* ## /usr/ :
> **User related programs**.
<br>- In its subdirectories will find binary and executables for each user.
<br>- Will find /bin, /tmp, /sbin, and more, just like in the / subdirectories, for the users that arent logged local, access it.
<br>- /usr/local/: Locally installed soft that is not part of the operating system.
<br>- /usr/sbin/: System administration binaries.

* ## /var/ :
> **Variable data.**
<br>- Most notably log files.
<br>- /var/log/: Log files.

*  ## /boot/ :
> **Files needed to boot the operating system**

*  ## /cdrom/ :
> **Mount point for CD-ROM**

*  ## /cgroup/ :
> **Countrol Groups hierarchy**

*  ## /dev/ :
> **Device files (drivers).**
<br>- Typically controlled by the operating system and the system administrators.


*  ## /export/ :
> **Shared file systems.**
<br>

*  ## /lib/ :
> **System Libraries**
<br>

*  ## /lib64/ :
> **System libraries, 64 bits.**
<br>

*  ## /lost+found/ :
> **Recovered files.**
<br>- After system check been performed.

*  ## /media/ :
> **Used to mount removable media.**
<br>- CD-ROMS, USB, etc.

*  ## /mnt/ :
> **Mount external file systems.**
<br>

*  ## /proc/ :
> **Provides infos about running processes.**
<br>

*  ## /root/ :
> **The home directory for the root account.**
<br>

*  ## /selinux/ :
> **Used to display information about SELinux.**
<br>

*  ## /srv/ :
> **Contains data which is served by the system (linux server).**
<br>- /srv/www/: Web server files.
<br>- /srv/ftp/: FTP files.

*  ## /sys/ :
> **Used to display and sometimes configure the devices known to the Linux Kernel.**
<br>

***

