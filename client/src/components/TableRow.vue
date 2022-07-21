<script>
import { mapActions } from 'pinia'

export default {
  name: 'tableRow',

  props: ['index', 'history'],
  methods: {
    editMovie() {
      const { id } = this.movie
      this.$emit('editMovie', id, 'edit')
    },
    changeStatus(id, status) {
      this.$emit('changeStatus', id, status)
    }
  }
}
</script>

<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>
      {{ history.height }}
    </td>
    <td>
      {{ history.weight }}
    </td>
    <td>
      {{ history.neck }}
    </td>
    <td>
      {{ history.waist }}
    </td>
    <td>
      {{ history.hip }}
    </td>
    <td>
      {{ history.activitylevel }}
    </td>
    <td>
      {{ history.createdAt }}
    </td>
  </tr>
</template>

<style></style>
