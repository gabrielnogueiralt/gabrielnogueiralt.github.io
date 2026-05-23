import { profile } from '../data/profile'
import { RoleTimeline } from './RoleTimeline'
import { Section } from './Section'

export function Academic() {
  return (
    <Section id="academic" eyebrow="04. Academic" title="Teaching & university roles">
      <RoleTimeline items={profile.academic} />
    </Section>
  )
}
