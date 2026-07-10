<script>
  import LinkLikeButton from "../LinkLikeButton.svelte";
  let {
    image,
    image_alt,
    text,
    url,
    label,
    color
  } = $props();
</script>

<div class="p-6">
  <img src={image} alt={image_alt} class="w-[250px] my-8">
  <p class="text-xl font-light my-8">{text}</p>
  <LinkLikeButton go_to={url} action_label={label} color={color} external={true}/>
</div>