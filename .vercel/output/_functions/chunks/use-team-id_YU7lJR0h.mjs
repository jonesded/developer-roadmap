import { useState, useEffect } from 'react';

function useTeamId() {
  const [teamId, setTeamId] = useState(null);
  useEffect(() => {
    const searchTeamId = new URLSearchParams(window.location.search).get("t") || null;
    setTeamId(searchTeamId);
  }, []);
  return { teamId };
}

export { useTeamId as u };
