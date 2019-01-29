# Layout 布局
----
### 概述
栅格化设计是按照一定的规则把页面分成固定的相同宽度，然后列出各种组合的可能性，以便于在进行页面呈现的时候能够快速的进行布局。市面上一般使用 12栅格 系统，也有采用 8栅格 系统的，但是随着设备屏幕越来越大，传统的 12栅格 系统在一些业务场景下，没办法很好的解决元素布局的问题，所以我们使用了 24栅格 系统。也就是将页面区域 24 等分。
### 基础布局
<div class="demo-block">
    <m-row>
        <m-col :span="24"><div class="grid-content bg-purple-dark"></div></m-col>
    </m-row>
    <m-row class="m-10">
        <m-col :span="8"><div class="grid-content bg-purple"></div></m-col>
        <m-col :span="8"><div class="grid-content bg-purple-light"></div></m-col>
        <m-col :span="8"><div class="grid-content bg-purple"></div></m-col>
    </m-row>
    <m-row class="m-10">
        <m-col :span="4"><div class="grid-content bg-purple"></div></m-col>
        <m-col :span="4"><div class="grid-content bg-purple-light"></div></m-col>
        <m-col :span="4"><div class="grid-content bg-purple"></div></m-col>
        <m-col :span="4"><div class="grid-content bg-purple-light"></div></m-col>
        <m-col :span="4"><div class="grid-content bg-purple"></div></m-col>
        <m-col :span="4"><div class="grid-content bg-purple-light"></div></m-col>
    </m-row>
</div>

::: demo
```html

<w-row>
 <w-col :span="24"><div class="grid-content bg-purple-dark"></div></w-col>
</w-row>
<w-row class="m-10">
 <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="8"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row class="m-10">
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
</w-row>

```
:::