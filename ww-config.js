export default {
  editor: {
    label: {
      en: "shadcn Label",
      fr: "Libellé shadcn"
    },
    icon: 'fas fa-tag',
    bubble: {
      icon: 'fas fa-tag'
    },
    deprecated: false
  },
  properties: {
    text: {
      label: {
        en: "Label text",
        fr: "Texte du libellé"
      },
      type: "Text",
      defaultValue: "Label",
      bindable: true,
      translatable: true,
      section: "content"
    },
    htmlFor: {
      label: {
        en: "For (input ID)",
        fr: "Pour (ID de l'input)"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      section: "association"
    },
    required: {
      label: {
        en: "Show required asterisk",
        fr: "Afficher l'astérisque obligatoire"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true,
      section: "appearance"
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  sections: {
    content: {
      label: { en: "Content", fr: "Contenu" },
      expand: true
    },
    association: {
      label: { en: "Association", fr: "Association" },
      expand: false
    },
    appearance: {
      label: { en: "Appearance", fr: "Apparence" },
      expand: false
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 