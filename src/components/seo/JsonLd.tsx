/**
 * Reusable JSON-LD structured data component.
 * Renders a <script type="application/ld+json"> tag in the head.
 *
 * Accepts `unknown` because schema-dts WithContext<T> generic types
 * have complex union constraints that prevent direct assignability.
 * The data is only serialized via JSON.stringify, so runtime safety is preserved.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
