import { ENDPOINT } from "$lib/api/5e/constants";

export const getAllMonsters = async () => {
   try {
      const fetchResult = await fetch(`${ENDPOINT}/monsters`)
      const monsters = await fetchResult.json()
      return monsters
   } catch (e) {
      console.error(e)
      throw e
   }
   
}