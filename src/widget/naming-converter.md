<script setup>
import { ref, computed } from 'vue';
import { Input as AInput } from 'ant-design-vue';
import 'ant-design-vue/es/input/style';

const variable = ref('');

const kebabCase = computed(() => {
  return variable.value.toLowerCase().split(/\s+/).join('-');
});

const camelCase = computed(() => {
  return variable.value
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) => {
      if (index > 0 && word) {
        return word[0].toUpperCase() + word.slice(1);
      }

      return word;
    })
    .join('');
});

const pascalCase = computed(() => {
  return variable.value
    .toLowerCase()
    .split(/\s+/)
    .map((word) => {
      if (word) {
        return word[0].toUpperCase() + word.slice(1);
      }

      return word;
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
