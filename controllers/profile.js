let db = require('../models');
let profileModel = db.transporter;
let bankModel = db.bank_details;

let profileController = () => {
  async function getProfile(id) {
    return await profileModel.findOne({
      include: [
        {
          model: bankModel,
        },
      ],
      where: {
        id: id,
      },
    });
  }

  const get = async function (req, res) {
    const profile = await getProfile(1);
    res.status(200);
    res.json(profile);
  };

  async function createProfile(profileData) {
    return new Promise((resolve, reject) => {
      profileModel
        .create({
          name: profileData.name,
          title: profileData.title,
          address: profileData.address,
          telephone_and_email: profileData.telephone,
          hsn: profileData.hsn,
        }).then((profile) => {
          resolve(profile);
        });
    });
  }

  async function updateProfile(profileData) {
    return new Promise((resolve, reject) => {
      profileModel
        .update({
          name: profileData.name,
          title: profileData.title,
          address: profileData.address,
          telephone_and_email: profileData.telephone,
          hsn: profileData.hsn,
        }, {
          where: {
            id: profileData.id
          }
        }).then(async (profile) => {
          profile = await profileModel.findOne({
            where: {
              id: profileData.id,
            },
          });
          resolve(profile);
        });
    });
  }

  const post = async function (req, res) {
    
    try {
      let profileData = req.body.profile;
      let bankData = req.body.bankDetails;
      let profilePromise;

      if (profileData.id) {
        profilePromise = updateProfile(profileData);
      } else {
        profilePromise = createProfile(profileData);
      }
      
      
      profilePromise.then(async (createdProfile) => {
        if (bankData && bankData.acName && bankData.bankName) {
          bankModel
            .create({
              ac_name: bankData.acName,
              bank_name: bankData.bankName,
              bank_ac_number: bankData.bankNumber,
              ifsc: bankData.ifsc,
              branch: bankData.branch,
              userId: createdProfile.id,
            })
            .then(async () => {
              res.status(200);
              const profile = await getProfile(createdProfile.id);
              res.json(profile);
            });
        } else {
          res.status(200);
              const profile = await getProfile(createdProfile.id);
              res.json(profile);
        }
          
        });
    } catch (error) {
      res.status(500);
      res.json({ error });
      throw error;
    }
  };
  return { get, post };
};

module.exports = profileController();
