import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node
            }
        },
        plugins: {
            js
        },
        rules: {
            ...js.configs.recommended.rules,
      
            'semi': ['error', 'always'],        
            'quotes': ['error', 'single'],       
            'indent': ['error', 4],             
            'no-unused-vars': 'warn',            
            'no-console': 'off',
            'no-undef': 'error'                 
        }
    }
]);
