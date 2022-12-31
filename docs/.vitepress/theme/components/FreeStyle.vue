<script setup lang="ts"></script>
<template></template>
<style>
.links {
    margin-bottom: 80px;
}
.links ul {
    margin: 0;
    margin-top: 50px;
    list-style: none;
    padding: 0;
    width: 100%;
    display: inline-block;
}
ol, ul {
    box-sizing: border-box;
}
.links ul li{
    min-width: 140px;
    width: 18%;
    float: left;
    border-style: solid !important;
    border-width: 2px;
    border-color: var(--vp-custom-block-tip-border);
    color: var(--vp-custom-block-tip-text);
    background-color: var(--vp-custom-block-tip-bg);
    padding: 12px 12px;
    margin: 12px 12px;
    position: relative;
    overflow: hidden;
    -webkit-transition: all .8s;
    transition: all .8s;
    border-radius: 10px;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
a {
    background-color: transparent;
    text-decoration: none;
    color: var(--vp-c-brand);
    outline: 0;
    -webkit-transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    -moz-transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
}
.links ul li img {
    float: left;
    padding: 1px/*!covered5px*/;
    opacity: 1;
    transform: rotate(0);
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -o-transform: rotate(0);
    -ms-transform: rotate(0);
    transition: all ease 1s;
    -webkit-transition: all ease 1s;
    -moz-transition: all ease 1s;
    -o-transition: all ease 1s;
    margin-top: 3px;
    margin-left: 3px;
    margin-right: 3px;
    width: 90px;
    height: 90px;
    border-radius: 100%;
}
img {
    border: 0;
    height: auto;
    max-width: 100%;
}
span.sitename {
    font-size: 20px;
    margin-top: 84px;
    margin-left: 8px;
    margin-right: 8px;
    color: var(--vp-custom-block-tip-text)/*!covered#505050*/;
    display: block;
    -webkit-transition: all .3s;
    transition: all .3s;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
}
.linkdes {
    font-size: 14px;
    margin-left: 8px;
    margin-right: 8px;
    text-overflow: ellipsis;
    color: var(--vp-custom-block-tip-text);
    overflow: hidden;
    white-space: nowrap;
    line-height: 30px;
    -webkit-transition: all .5s;
    transition: all .5s;
}
body.dark .linkdes {
    color: #CCCCCC;
}
</style>
<style>
@media (min-width: 960px){
.Demo {
    padding: 32px 32px 0 32px;
}
}
@media (min-width: 768px){
.Demo {
    padding: 48px 32px 128px 32px;
}
}
.Demo {
    padding: 32px 32px 96px 32px;
    width: 100%;
}
.container-2 {
    margin: 0 auto;
    width: 100%;
}
@media (min-width: 960px)
{
    .content-2 {
    padding: 0 32px 128px;
}
}
.content-2 {
    position: relative;
    margin: 0 auto;
    width: 100%;
}
.content-container-2 {
    margin: 0 auto;
}
</style>