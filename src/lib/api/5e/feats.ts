import { ENDPOINT } from "$lib/api/5e/constants";

export const getAllFeats = async () => {
   try {
      const fetchResult = await fetch(`${ENDPOINT}/feats`)
      const feats = await fetchResult.json()
      return feats
   } catch (e) {
      console.error(e)
      throw e
   }
   
}