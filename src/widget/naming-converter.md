<script setup>
import { ref, computed } from 'vue';
import { Input } from 'ant-design-vue';
import 'ant-design-vue/es/input/style';

const variable = ref('');

const kebabCase = computed(() => {
  return variable.value.toLowerCase().split(' ').join('-');
});

const camelCase = computed(() => {
  return variable.value
    .toLowerCase()
    .split(' ')
    .map((v, i) => {
      if (i > 0) {
        return v[0].toUpperCase() + v.slice(1);
      }

      return v;
    })
    .join('');
});

const pascalCase = computed(() => {
  return variable.value
    .toLowerCase()
    .split(' ')
    .map((v) => {
      if (v.length > 0) {
        return v[0].toUpperCase() + v.slice(1);
      }

      return '';
    })
    .join('');
});
</script>

# 命名转换器

### <Input v-model:value="variable" />

### kebab-case（短横线）

{{ kebabCase }}

### camelCase（小驼峰）

{{ camelCase }}

### PascalCase（大驼峰）

{{ pascalCase }}
