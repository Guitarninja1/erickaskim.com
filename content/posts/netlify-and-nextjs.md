---
title: Netlify and Nextjs
description: Image file loading with Nextjs and Netlify
date: 2021-11-02T20:36:25.665Z
slug: next&netlify
---
Talk about madness... Trying to navigate documents can be a real pain for a beginner, especially when it come to Nextjs integrating Netlify. The key issue I had was in the next.config file. I don't know who else has run into this problem with delegating image loading but I have a tip for you. Cloudinary. I was able to use my API base URL as the 'path:' field in the config file under images, setting the 'loader:' config to 'cloudinary'.

What I thought was super complicated ended up being a simple inclusion of the cloudinary api.