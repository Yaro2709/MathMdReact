import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'pages/AboutPage', // навзание сториса
    component: AboutPage, // название элемента
    parameters: { },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ],
};
