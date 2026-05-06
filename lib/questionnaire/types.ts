export type Locale = 'en' | 'es';
export type LocalizedText = Record<Locale, string>;

export type ChoiceOption = {
  id: string;
  label: LocalizedText;
  value: string;
};

export type ChoiceQuestion = {
  id: string;
  type: 'choice';
  text: LocalizedText;
  options: ChoiceOption[];
  required?: boolean;
  showWhen?: (answers: Answers) => boolean;
};

export type ContactFieldType = 'text' | 'email' | 'phone';

export type ContactField = {
  id: 'name' | 'email' | 'phone';
  type: ContactFieldType;
  label: LocalizedText;
  placeholder?: LocalizedText;
  required?: boolean;
};

export type Answers = Record<string, string>;
