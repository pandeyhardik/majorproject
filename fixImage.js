// db.listings.find({}).forEach(doc => {
//     if (typeof doc.image === "string") {
//       const fixed = doc.image.replace(/'/g, '"');
//       try {
//         const parsed = JSON.parse(fixed);
//         db.listings.updateOne({ _id: doc._id }, { $set: { image: parsed } });
//       } catch (e) {
//         print("Failed to fix image for document:", doc._id);
//       }
//     }
//   });
  