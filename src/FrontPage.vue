<template>
  <div class="index-home">
    <header-cpt></header-cpt>
    <div class="index-body">
      <router-view/>
    </div>
    <footer-cpt></footer-cpt>
  </div>
</template>

<script>
import HeaderCpt from "@/components/HeaderCpt";
import FooterCpt from "@/components/FooterCpt";

export default {
  name: "FrontPage",
  components: {
    HeaderCpt,
    FooterCpt
  }
};
</script>