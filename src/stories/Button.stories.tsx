import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'] 
    },
    type: {
      control: { type: 'select' },
      options: ['link', 'text', 'ghost', 'default', 'primary', 'dashed'] 
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


//type="primary" danger
export const Danger = Template.bind({});
Danger.args = {
  danger: true,
  disabled: false,
  children: 'Button',
};

export const Info = Template.bind({});
Info.args = {
  info: true,
  disabled: false,
  children: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  disabled: false,
  children: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  success: true,
  disabled: false,
  children: 'Button',
};
