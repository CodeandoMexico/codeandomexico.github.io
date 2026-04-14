<script>
  import Button from "../Button.svelte";
  let {
    image,
    image_alt,
    text,
    url,
    label,
    color
  } = $props();
</script>

<div class="flex flex-col justify-start gap-8 p-6">
  <img src={image} alt={image_alt} class="w-[250px]">
  <p class="text-xl font-light">{text}</p>
  <a href={url}>
    <Button action_label={label} color={color} />
  </a>
</div>