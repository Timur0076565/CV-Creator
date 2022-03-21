export default interface IPersonalData {
  details: {
    avatar: string
    jobTitle: string
    firstName: string
    lastName: string
    email: string
    phone: string
  },
  links: {
    name: string,
    href: string
  }[],
  skills: {
    name: string,
    level: string
  }[],
  profile: string
  employmentHistory: {
    jobTitle: string
    employer: string
    date: string
    city: string
    description: string
  }[],
  education: {
    school: string
    degree: string
    date: string
    city: string
    description: string
  }[],
}
