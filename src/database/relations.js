const createRelations = async (models) => {
  try {
    // Country - Profile
    // models.country.hasMany(models.profile, { foreignKey: "country_id" });
    // models.profile.belongsTo(models.country, { foreignKey: "country_id" });
    // Album - User
    // models.album.hasMany(models.user, {foreignKey: "user_id"});
    // models.user.belongsTo(models.album, {foreignKey: "user_id"});
    // // Album - Level
    // models.album.hasMany(models.level, {foreignKey: "level_id"});
    // models.level.belongsTo(models.album, {foreignKey: "level_id"});
    // // Comment - Type
    // models.comment.hasMany(models.type, {foreignKey: "type_id"});
    // models.type.belongsTo(models.comment, {foreignKey: "type_id"});
    // // Comment - User
    // models.comment.hasMany(models.user, {foreignKey: "user_id"});
    // models.user.belongsTo(models.comment, {foreignKey: "user_id"});
    // // Comment - Post 
    // models.comment.hasMany(models.post, {foreignKey: "post_id"});
    // models.post.belongsTo(models.comment, {foreignKey: "post_id"});
    // // Conversation - User (sender)
    // models.conversation.hasMany(models.user, {foreignKey: "user_id"});
    // models.user.belongsTo(models.conversation, {foreignKey: "sender_id"});
    // // Conversation - User (receptor)
    // models.conversation.hasMany(models.user, {foreignKey: "user_id"});
    // models.user.belongsTo(models.conversation, {foreignKey: "receptor_id"});
    // // Conversation - User (receptor)
    // models.conversation.hasMany(models.user, {foreignKey: "user_id"});
    // models.user.belongsTo(models.conversation, {foreignKey: "receptor_id"});
    // // File - User (receptor)
    // models.file.hasMany(models.user, {foreignKey: "user_id"});
    // models.user.belongsTo(models.file, {foreignKey: "user_id"});
    // // File - Level
    // models.file.hasMany(models.level, {foreignKey: "level_id"});
    // models.level.belongsTo(models.file, {foreignKey: "level_id"});
    // // File - Album
    // models.file.hasMany(models.album, {foreignKey: "album_id"});
    // models.album.belongsTo(models.file, {foreignKey: "album_id"});
    // // Heart - Type
    // models.heart.hasMany(models.type, {foreignKey: "type_id"});
    // models.type.belongsTo(models.heart, {foreignKey: "type_id"});
    // // Heart - User
    // models.heart.hasMany(models.user, {foreignKey: "user_id"});
    // models.user.belongsTo(models.heart, {foreignKey: "user_id"});
    

  } catch (error) {
    console.log(error);
  }
};

module.exports = { createRelations };
