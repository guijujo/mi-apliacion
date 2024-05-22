import { EditArticuloForm } from '@/app/components/edit-articulos-form';
import { createServerClient } from '@/app/utils/supabase/server';

export default async function EditArticulo({ params }: any) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('articulos')
    .select('*')
    .eq('name', params.id)
    .single();

  return <EditArticuloForm articulo={data} />;
}