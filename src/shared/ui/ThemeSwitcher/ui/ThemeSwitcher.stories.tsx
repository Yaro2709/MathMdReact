import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/ThemeSwitcher', // навзание сториса
    component: ThemeSwitcher, // название элемента
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} satisfies Meta<typeof ThemeSwitcher>;

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
