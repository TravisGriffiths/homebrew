import { ENDPOINT } from "$lib/api/5e/constants";

export const getAllSpells = async () => {
   try {
      const fetchResult = await fetch(`${ENDPOINT}/spells`)
      const spells = await fetchResult.json()
      return spells
   } catch (e) {
      console.error(e)
      throw e
   }
   
}