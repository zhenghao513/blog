<script setup>
import { ref, computed } from 'vue';
import { Input as AInput } from 'ant-design-vue';
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
      if (i > 0 && v) {
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
      if (v) {
        return v[0].toUpperCase() + v.slice(1);
      }

      return v;
    })
    .join('');
});
</script>

# 命名转换器

<div style="margin-top: 32px">
  <AInput v-model:value="variable" />
</div>

### kebab-case <Badge type="info" text="短横线" />

{{ kebabCase }}

### camelCase <Badge type="info" text="小驼峰" />

{{ camelCase }}

### PascalCase <Badge type="info" text="大驼峰" />

{{ pascalCase }}
