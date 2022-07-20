<script>
import { mapActions } from 'pinia';
import { useTutorialStore } from '../stores/tutorial';

export default {
  name: "HomePageCard",
  props: ["category"],
  methods: {
    ...mapActions(useTutorialStore, ["clickCategoryHandler"]),
  }
};
</script>

<template>
  <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
    <div class="card-flyer bg-white">
      <div class="text-box">
        <div class="image-box">
          <i @click.prevent="clickCategoryHandler(category.route)" role="button" :class="category.font" style="font-size: 150px"></i>
        </div>
      </div>
    </div>
  </div>
</template>
