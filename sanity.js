import {createClient} from'@sanity/client'
import imageBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 's7rh4w4o',
  dataset: 'production',
  apiVersion: '2021-10-21', // use a UTC date string
  // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
const Builder=imageBuilder(client);
 export const urlfor=(source)=>Builder.image(source);
export const getdish= async () =>{
   const item= await client.fetch('*[_type=="dish"]').then((data)=>{return data;});
 
    return item;
};
export const getcategory = async () =>{
  const item= await client.fetch('*[_type=="dishcategory"]').then((data)=>{return data;});

   return item;
};
export const getrestaurant = async () =>{
  const item= await client.fetch('*[_type=="restaurant"]').then((data)=>{return data;});

   return item;
};
