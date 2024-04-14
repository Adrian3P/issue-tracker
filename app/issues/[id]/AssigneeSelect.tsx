"use client";
import { Select } from "@radix-ui/themes";
import React from "react";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="1">Adrian Patrascu</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Trigger>
    </Select.Root>
  );
};

export default AssigneeSelect;
