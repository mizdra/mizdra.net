import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  { ignores: ['*.module.css.d.ts', '.next'] },
  ...compat.extends(
    '@mizdra/mizdra',
    '@mizdra/mizdra/+typescript',
    '@mizdra/mizdra/+react',
    '@mizdra/mizdra/+prettier',
    'next/core-web-vitals',
  ),
];
