import { Input, Button, Typography, message } from "antd";
import { CopyOutlined, } from "@ant-design/icons";
import { useState } from "react";
import { createStyles } from 'antd-style';

const { Text, Title } = Typography;

const useStyles = createStyles(() => {
  return {
    container: {
      padding: "24px"
    },
  };
});

const License = () => {
  const { styles } = useStyles();
  const [licenseKey] = useState("XXXX-YYYY-ZZZZ-WWWW"); // Replace with actual license key
  const [expirationDate] = useState("2025-12-31"); // Replace with actual expiration date
  const [showLicense, setShowLicense] = useState(false);

  const getMaskedLicense = () => {
    return licenseKey.replace(/[A-Z0-9]/g, '*');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(licenseKey);
    message.success("License key copied to clipboard!");
  };

  const toggleLicenseVisibility = () => {
    setShowLicense(!showLicense);
  };

  return (
    <div className={styles.container}>
      <Title level={2}>License Info</Title>
      <div style={{ margin: "32px 0px" }}>
        <Title level={5}>License Key:</Title>
        <div style={{ display: "flex", gap: "8px", marginTop: "8px", alignItems: "center" }}>
          <CopyOutlined  onClick={copyToClipboard}/>
          <Input 
            value={showLicense ? licenseKey : getMaskedLicense()}
            readOnly
            style={{ width: "300px" }}
          />
          <Button 
            type="link"
            onClick={toggleLicenseVisibility}
            size="small"
            style={{ fontWeight: "bold", marginLeft: "-6px" }}
          >
            {showLicense ? 'Hide' : 'Show'}
          </Button>
        </div>
      </div>

      <div>
        <Title level={5}>Expiration Date:</Title>
        <div style={{ marginTop: "8px" }}>
          <Text>{new Date(expirationDate).toLocaleDateString()}</Text>
        </div>
      </div>
    </div>
  );
};

export default License;
