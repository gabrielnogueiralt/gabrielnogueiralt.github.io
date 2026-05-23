import { profile } from '../data/profile'
import { RoleTimeline } from './RoleTimeline'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" eyebrow="03. Experience" title="Where I've worked">
      <RoleTimeline items={profile.experience} />
    </Section>
  )
}
