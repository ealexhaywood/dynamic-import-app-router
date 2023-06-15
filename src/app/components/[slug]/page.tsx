export default async function ComponentPage({
  params,
}: {
  params: { slug: string };
}) {
  // This throws an error
  const Component = (await import(`@/components/${params.slug}`)).default;

  // This works fine
  // const Component = (await import('@/components/input')).default

  return <Component />;
}
