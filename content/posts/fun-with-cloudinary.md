---
title: Fun with Cloudinary
description: "Cloudinary "
excerpt: " *Screams Internally*"
date: 2021-12-20T20:37:32.471Z
image: /public/me_dmoraf
---
Today I spent hours trying to debug Netlify due to Cloudinary providing the wrong data type? I'm not even sure if that was the issue anymore. My site was down for a very long time because the images were causing the Netlify build to break. I eventually was able to change some settings to get it working. I also found out that in the file path you do not need to specify file type. Cloudinary will automatically give it the most agreeable type.

My favorite part of this whole endeavor was that when my mentor looked over my code and had me test it in front of them... nothing... it worked fine. \*Screams Internally\* I guess that's just the way it goes. At least it's working now.