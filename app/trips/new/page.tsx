export default function NewTrip() {
    return (
    <div className="max-w-lg mx-auto mt-10">
      <Card>
        <CardHeader> New Trip</CardHeader>
        <CardContent>
          <form
            className="space-y-6"
            action={(formData: FormData) => {
              if (imageUrl) {
                formData.append("imageUrl", imageUrl);
              }
              startTransition(() => {
                createTrip(formData);
              });
            }}
          >
            <div>
                
            </div>

