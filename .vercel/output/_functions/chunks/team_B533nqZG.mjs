import { atom, computed } from 'nanostores';

const $teamList = atom([]);
const $currentTeam = atom();
const $currentTeamRole = computed($currentTeam, (team) => team?.role);
const $isCurrentTeamAdmin = computed(
  $currentTeamRole,
  (role) => ["admin"].includes(role)
);
computed(
  $currentTeamRole,
  (role) => ["admin", "manager"].includes(role)
);

export { $teamList as $, $currentTeam as a, $isCurrentTeamAdmin as b };
