import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetAttributify({}), presetUno()],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno']
    })
  ]
})
