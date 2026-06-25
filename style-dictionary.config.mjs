import StyleDictionary from 'style-dictionary';
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

StyleDictionary.registerTransform({
  name: 'size/dimensionPx',
  type: 'value',
  filter: (token) => token.type === 'dimension',
  transform: (token) => {
    const v = String(token.value).trim();
    if (/[a-z%]/i.test(v)) return v;
    const n = Number.parseFloat(v);
    return Number.isFinite(n) ? `${n}px` : v;
  },
});

StyleDictionary.registerFormat({
  name: 'css/tailwind-theme',
  format: async ({ dictionary, file, options }) => {
    const header = await fileHeader({ file });
    const variables = formattedVariables({
      format: 'css',
      dictionary,
      outputReferences: options.outputReferences,
    });
    return `${header}@theme {\n${variables}\n}\n`;
  },
});

const sd = new StyleDictionary({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/kebab', 'size/dimensionPx', 'color/css'],
      buildPath: 'src/tokens/',
      files: [
        {
          destination: '_generated.css',
          format: 'css/tailwind-theme',
          options: { outputReferences: true },
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log('✅ tokens/*.json → src/tokens/_generated.css 완료');
