import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "お問い合わせフォーム",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "inquiryType",
      title: "Inquiry Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fileUrl",
      title: "Uploaded File (Optional)",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "company",
      subtitle: "name",
      email: "email",
    },
    prepare({ title, subtitle, email }) {
      return {
        title: title || "会社名未入力",
        subtitle: `${subtitle}（${email}）`,
      };
    },
  },
});
