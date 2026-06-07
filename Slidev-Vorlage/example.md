---
theme: ./
addons:
  - slidev-component-pager
transition: none
---

# bluehands slidev theme

Presentation slides for developers

<!-- <div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" flex="~ justify-center items-center gap-2" hover="bg-white bg-opacity-10">
    Press Space for next page <div class="i-carbon:arrow-right inline-block"/>
  </span>
</div> -->

---
layout: default
---

# Table of Contents

<Toc text-sm minDepth="1" maxDepth="2" />


---

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: section
---

# This is a Section

---
layout: default
---

# Interactable Code from Stackblitz

<div class="grid w-full">
  <Stackblitz id="stackblitz-starters-xmzqmx16" file="src%2Fmain.ts" theme="light"/>
</div>

---
layout: default
---

# This theme has the Freehand free icons by Streamline installed

To use an Icon you just have to insert it as a html tag like so:

```html
<streamline-freehand-smiley-happy width="200" height="auto"/>
```

<streamline-freehand-smiley-happy width="200" height="auto"/>

You can change everything! From size to position and you can even animate the icon!

---
layout: image-right
image: https://cover.sli.dev
---

# Code

Use code snippets and get the highlighting directly!

```ts twoslash
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center-image
image: 'https://cover.sli.dev'
---

# Layout: Center Image

---
layout: two-cols-header
---

# Layout: two-cols-header

::left::

Linke Seite
- Stichpunkt 1
- Stichpunkt 2
- Stichpunkt 3

::right::

Rechte Seite
- Stichpunkt 1
- Stichpunkt 2
- Stichpunkt 3

---
layout: quote
author: Kent Beck
bluehandsQuote: false
---

# Good engineering is not primarily making good decisions, it's seeking good feedback which lets you quickly discard bad decisions.

---
layout: section
---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

