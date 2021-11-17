# React Icons 🐱

## Code Usage
```js
<Icon name="IconName" [title] />
```

## To add a new icon/s, or to delete an icon/s:
- Place ```.svg``` file into ```/icon/assets``` folder, or delete the .svg file
- Execute in your CLI (a future version may include this as a prebuild step)
    ```npm run icons```

- New icon/s can now be referenced by name! Old ones are gone buhbye! (And will no longer be valid attribute values for the 'name' type so will be highlighted in the tsx compilation process as errors wherever they were used before)
- Remember to ```git add``` or ```git rm``` any files added or removed by the above process to properly share the love! This will include changes to automatically generated files in ```/icon/icons```, and the master list ```/icon/icons/index.tsx```

## But how does it work?
- By leaning heavily on the magic of https://react-svgr.com/ and https://github.com/svg/svgo to:
    - Remove extraneous and broken formatting from .svg, and prettify the formatted output (just for us)
    - Has lots of additional capability to set/remove characteristics that we need/don't want
    - Remove all references to hardcoded colors in favor of 'currentColor' via the attribute 'color' (i.e. it'll inherit unless you tell it otherwise)
    - Using ```/icon/icon-index-template.js``` and ```/icon/icon-template.js``` the wizards of @svgr produce (from the ```/assets``` subfolder) a new React Typescript component (in ```/icons```, currently PascalCased), and the supporting wrapper index component ```index.tsx```, which import/export the appropriate updated interfaces and name types.
- This enables us to take any SVG and use it inline, which requires no deferred loading, nor spritesheet font loading, and loads inline and renders instantly.
- All files in ```/icon/icons``` are automatically deleted, before regeneration by ```npm run icons```, so do not store other, non-related, persistent files in this folder!
###### Note: Rename the .svg file (that gets dropped into ```/icon/assets```, remember!) if it includes leading numbers, or any commas, to not do so, since this interferes with the TypeScript files generated per icon.
