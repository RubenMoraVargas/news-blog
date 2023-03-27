import SmallPicture from './components/smallPicture/SmallPicture';

export interface NewItemProps {
  title: string;
  description: string;
}

export function NewItem(props: NewItemProps) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-200 p-6 rounded-lg hover:p-8">
        <SmallPicture/>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {props.title}
        </h2>
        <p className="leading-relaxed text-base">{props.description}</p>
      </div>
    </div>
  );
}

export default NewItem;
