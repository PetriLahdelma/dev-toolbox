import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    children: "Button"
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "outline", "ghost"]
    },
    size: {
      control: "inline-radio",
      options: ["default", "sm", "lg"]
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline"
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost"
  }
};
