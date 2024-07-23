import 'app/styles/index.scss'; // импортируе наши стили
import { StoryObj } from '@storybook/react';

export const StyleDecorator = (story: () => StoryObj ) => story();
