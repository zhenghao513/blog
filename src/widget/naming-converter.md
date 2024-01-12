<script setup>
import { ref, computed } from 'vue';
import {
  Input as AInput,
  Form as AForm,
  FormItem as AFormItem,
  TypographyParagraph as ATypographyParagraph,
} from 'ant-design-vue'

const variable = ref('');

const kebabCase = computed(() => {
  return variable.value
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .join('-');
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

const block = ref('')
const element = ref('')
const modifier = ref('')

const blockFormat = computed(() => {
  return block.value.trim().toLowerCase().split(/\s+/).join('-')
})
const elementFormat = computed(() => {
  if (element.value) {
    return `__${element.value.trim().toLowerCase().split(/\s+/).join('-')}`
  }

  return ''
})
const modifierFormat = computed(() => {
  if (modifier.value) {
    return `--${modifier.value.trim().toLowerCase().split(/\s+/).join('-')}`
  }

  return ''
})
const blockElementModifierCase = computed(() => {
  if (modifier.value === '') {
    return blockFormat.value + elementFormat.value
  }

  return blockFormat.value + elementFormat.value + modifierFormat.value
})
</script>

# 命名转换器

<div style="margin-top: 32px">
  <AInput v-model:value="variable" />
</div>

### kebab-case <Badge type="info" text="短横线" />

<ATypographyParagraph copyable>{{ kebabCase }}</ATypographyParagraph>

### camelCase <Badge type="info" text="小驼峰" />

<ATypographyParagraph copyable>{{ camelCase }}</ATypographyParagraph>

### PascalCase <Badge type="info" text="大驼峰" />

<ATypographyParagraph copyable>{{ pascalCase }}</ATypographyParagraph>

<div style="margin-top: 32px">
  <AForm
    :label-col="{ span: 2 }"
    :wrapper-col="{ span: 22 }"
  >
    <AFormItem
      label="块"
      colon
    >
      <AInput v-model:value="block" />
    </AFormItem>
    <AFormItem
      label="元素"
      colon
    >
      <AInput v-model:value="element" />
    </AFormItem>
    <AFormItem
      label="修饰"
      colon
    >
      <AInput v-model:value="modifier" />
    </AFormItem>
  </AForm>
</div>

### block\_\_element--modifier <Badge type="info" text="BEM" />

<ATypographyParagraph copyable>{{ blockElementModifierCase }}</ATypographyParagraph>
