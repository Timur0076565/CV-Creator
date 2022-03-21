import { mount } from '@vue/test-utils'
import PersonalDetailsPart from "~/components/pageParts/PersonalDetailsPart";

describe('PersonalDetailsPart', () => {
  test('is a component PersonalDetailsPart mounted', () => {
    const wrapper = mount(PersonalDetailsPart, {
      propsData: {
        formData: {
          details: {
            avatar: '',
              jobTitle: '',
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
          },
          links: [],
            skills: [],
            profile: '',
            employmentHistory: [],
            education: [],
        },
      }
    });
    expect(wrapper.vm).toBeTruthy();
  })
})
