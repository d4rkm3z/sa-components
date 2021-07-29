import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DropdownList } from "./DropdownList";

export default {
  title: "Example/DropdownList",
  component: DropdownList,
  argTypes: { handleChange: { action: "selected" } },
} as ComponentMeta<typeof DropdownList>;

const Template: ComponentStory<typeof DropdownList> = (args) => (
  <DropdownList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  formName: "type",
  labelHeader: "Тип анализа",
  optionsArray: [
    { value: "ABC", label: "ABC анализ" },
    { value: "another", label: "Другой анализ" },
  ],
};
