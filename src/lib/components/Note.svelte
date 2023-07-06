
<div class="note">
   <slot />
</div>


<style>
   .note {
      font-family: ScalySansRemake;
      @apply bg-tertiary-500;
      border-style: solid;
      border-width: 1px;
      border-image: url("https://s3.us-west-2.amazonaws.com/travis.griffiths.files/noteBorder.png") 12 stretch;
      border-image-outset: 9px 0px;
      border-image-width: 11px;
      padding: 0.13cm 0.16cm;
      box-shadow: 1px 4px 14px #888;
      margin: 1em 0;
   }

</style>