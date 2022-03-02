module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'da1af70ec9007dd26abc5be69cffa93c'),
  },
});
